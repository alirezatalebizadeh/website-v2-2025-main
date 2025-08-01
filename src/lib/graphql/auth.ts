export const LOGIN_MUTATION = `
  mutation Login($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
        id
        username
        email
      }
    }
  }
`;

export const REGISTER_MUTATION = `
  mutation Register($username: String!, $email: String!, $password: String!) {
    register(input: {
      username: $username,
      email: $email,
      password: $password
    }) {
      jwt
      user {
        id
        username
        email
      }
    }
  }
`;
