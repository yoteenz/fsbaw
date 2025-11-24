export default function TestNoirPage() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'yellow',
      color: 'black',
      padding: '50px',
      fontSize: '48px',
      zIndex: 9999999
    }}>
      <h1>TEST PAGE WORKS!</h1>
      <p>If you see this, routing is working</p>
    </div>
  );
}

