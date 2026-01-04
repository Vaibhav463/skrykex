import React from "react";
import Sidebar from "./components/organisms/Sidebar";
import Header from "./components/organisms/Header";
import ErrorBar from "./components/molecules/ErrorBar";
import MarketTicker from "./components/molecules/MarketTicker";
import ProfitAlgos from "./components/molecules/ProfitAlgos";
import FeaturedAlgosSection from "./components/molecules/FeaturedAlgosSection";
import Footer from "./components/organisms/Footer";

function App() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#000000", 
        overflowX: "hidden",
      }}
    >
      <div className="bg-glow-effect"></div>

      <div style={{ display: "flex", position: "relative", zIndex: 1 }}>
        <Sidebar />

        <main
          style={{
            flex: 1,
            marginLeft: "260px",
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Header />

          <div style={{ padding: "10px" }}>
            <ErrorBar />

            <div
              style={{
                marginTop: "32px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span style={{ fontSize: "36px" }}>👋</span>
              <h1
                style={{
                  color: "#FFFFFF",
                  fontFamily: "DM Sans",
                  fontWeight: "200", 
                  fontSize: "36px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  margin: 0,
                  padding: 0,
                  verticalAlign: "middle",
                }}
              >
                Good Morning,{" "}
                <span style={{ color: "#FFFFFF", fontWeight: "600" }}>
                  Sambhav Singhvi
                </span>
              </h1>
            </div>

            <MarketTicker />
            <ProfitAlgos />
            <div style={{ marginTop: "10px" }}>
              <FeaturedAlgosSection />
            </div>
            <div style={{ marginTop: "10px" }}>
            <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
