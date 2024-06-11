import Navigation from "./about/components/Navigation";

export default function AboutLayout({ children }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <Navigation />
        </div>
        <div className="col-9">{children}</div>
      </div>
    </div>
  );
}
