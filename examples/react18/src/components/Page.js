import logo from '../logo.svg';

function Page({ content }) {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{content}</p>
      </header>
    </div>
  );
}

export default Page;
