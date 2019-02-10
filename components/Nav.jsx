
export default function Nav({ children }) {
  return (
    <nav>
      {children}
      <style jsx>
        {`
          nav {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </nav>
  );
}
