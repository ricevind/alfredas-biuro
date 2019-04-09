export function Slide({ shouldSlide, children }) {
  return (
    <div className={`fadeIn-wrapper ${shouldSlide && "active"}`}>
      <div className="fadeIn">{children}</div>
      <style jsx>
        {`
          @keyframes fadeIn {
            0% {
              transform: translateY(-250%);
            }

            100% {
              transform: translateY(0);
            }
          }

          .fadeIn-wrapper {
            // overflow: hidden;
            position: relative;
          }

          .active .fadeIn {
            position: relative;
            animation: fadeIn 1s;
          }
        `}
      </style>{" "}
    </div>
  );
}
