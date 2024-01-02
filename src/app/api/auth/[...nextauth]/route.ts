import NextAuth, { DefaultUser, NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },

      authorize(credentials) {
        const userPoolId = process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID
        const clientId = process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID
        const poolData = {
          UserPoolId: userPoolId as string,
          ClientId: clientId as string,
        }

        const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData)

        const authenticationData = {
          Username: credentials?.email as string,
          Password: credentials?.password,
        }

        const authenticationDetails =
          new AmazonCognitoIdentity.AuthenticationDetails(authenticationData)

        const userData = {
          Username: credentials?.email as string,
          Pool: userPool,
        }
        const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData)

        return new Promise((resolve, reject) => {
          cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: (session) => {
              if (session instanceof AmazonCognitoIdentity.CognitoUserSession) {
                const userInfo: DefaultUser = {
                  id: session.getIdToken().payload.sub,
                  email: session.getIdToken().payload.email,
                  name: session.getIdToken().payload.name,
                }
                resolve(userInfo)
              }
            },

            onFailure: (err) => {
              if (err) reject(err)
            },
          })
        })
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      session.user = token as any
      return session
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
