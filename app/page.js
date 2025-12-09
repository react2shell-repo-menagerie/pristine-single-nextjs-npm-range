export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>CVE-2025-66478 Test Application (Range Versions)</h1>
      <p>This is a test application for verifying the React2Shell vulnerability using range version specifiers.</p>

      <div style={{ marginTop: '2rem', padding: '1rem', background: '#f9f9f9', borderRadius: '8px' }}>
        <h2>Range Version Specifier Edge Case</h2>
        <p>This test case uses range version specifiers like <code>&gt;=15.0.0 &lt;16.0.0</code> in package.json.</p>
        <p>This syntax allows specifying a range of acceptable versions and is an edge case that patch tools must handle correctly.</p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>Test Commands:</h2>
        <ul>
          <li><code>npm test</code> - Check for vulnerabilities</li>
          <li><code>npm run fix</code> - Apply security patches</li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>Package Versions:</h3>
        <pre style={{ background: '#f0f0f0', padding: '1rem', borderRadius: '4px' }}>
{JSON.stringify({
  next: process.env.npm_package_dependencies_next || 'unknown',
  react: process.env.npm_package_dependencies_react || 'unknown',
  'react-dom': process.env.npm_package_dependencies_react_dom || 'unknown',
}, null, 2)}
        </pre>
      </div>
    </main>
  )
}
