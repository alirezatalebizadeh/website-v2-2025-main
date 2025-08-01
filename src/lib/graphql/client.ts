export async function graphqlRequest<T>(
  query: string,
  variables: Record<string, any> = {}
): Promise<T> {
  const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_BASE_URL + '/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();

  if (json.errors) {
    throw new Error(json.errors[0].message || 'GraphQL Error');
  }

  return json.data;
}
