export default async function graphql<T>(
  query: string = '',
  variables: Record<string, unknown> = {},
  token: string = '',
  tags?: string[],
) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_GRAPH_QL_ENDPOINT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({ query, variables }),
    next: tags?.length ? { tags } : {},
  });
  console.log('GraphQL endpoint:', process.env.NEXT_PUBLIC_GRAPH_QL_ENDPOINT);

  const json = await response.json();

  if (json.errors) {
    console.error('GraphQL error:', JSON.stringify(json.errors));
    throw new Error('Failed to fetch GraphQL data');
  }

  return json.data as T;
}
