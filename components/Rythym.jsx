import { lineHeight } from "../styles/typography";

export default () => (
  <div className="root">
    <div
      style={{
        height: `calc(var(--font-size) * ${lineHeight}`,
        backgroundColor: "rgba(0,25,0, 0.5)"
      }}
    >
      asd
      {console.log(
        typeof document !== "undefined"
          ? getComputedStyle(document.body).getPropertyValue("--font-size")
          : "asd"
      )}
    </div>
    <style jsx>{`
      .root {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -10000;
        background: repeating-linear-gradient(
          to bottom,
          #fff,
          #fff calc(var(--font-size) * 1.2 - 2px),
          #b2a2cd calc(var(--font-size) * 1.2 - 2px),
          #b2a2cd calc(var(--font-size) * 1.2)
        );
      }
    `}</style>
  </div>
);
