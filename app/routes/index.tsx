export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a href="/streaming-ssr-route1-one-api-call" rel="noreferrer">
            streaming-ssr-route1-one-api-call
          </a>
        </li>
        <li>
          <a href="/streaming-ssr-route2-multiple-api-calls" rel="noreferrer">
            streaming-ssr-route2-multiple-api-calls
          </a>
        </li>
        <li>
          <a
            href="/streaming-ssr-route3-mix-critical-and-non-critical-data"
            rel="noreferrer"
          >
            streaming-ssr-route3-mix-critical-and-non-critical-data
          </a>
        </li>
      </ul>
    </div>
  );
}
