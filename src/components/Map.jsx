import {ComposableMap,Geographies,Geography,Line,Marker} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const routes = [
  {
    name: "UAE",
    coordinates: [55.2708, 25.2048],
  },
  {
    name: "Singapore",
    coordinates: [103.8198, 1.3521],
  },
  {
    name: "USA",
    coordinates: [-95.7129, 37.0902],
  },
  {
    name: "UK",
    coordinates: [-3.436, 55.3781],
  },
];

const indiaCoordinates = [78.9629, 20.5937];

export default function Map() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#E0920F] font-medium uppercase tracking-wider">
            Global Network
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Connecting Markets Worldwide
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-4">
            Delivering import, export, trading and FMCG solutions across
            international markets through our trusted global network.
          </p>
        </div>

        {/* Map */}
        <div className="bg-slate-900 rounded-3xl p-6 md:p-10 border border-slate-800 shadow-2xl">
          <ComposableMap
            projectionConfig={{
              scale: 140,
            }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#1e293b"
                    stroke="#334155"
                    strokeWidth={0.5}
                    style={{
                      default: {
                        outline: "none",
                      },
                      hover: {
                        fill: "#E0920F",
                        outline: "white",
                      },
                      pressed: {
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Trade Routes */}
            {routes.map((route, index) => (
              <Line
                key={index}
                from={indiaCoordinates}
                to={route.coordinates}
                stroke="#E0920F"
                strokeWidth={1}
                strokeLinecap="round"
                strokeDasharray="8 4"
              />
            ))}

            {/* India Marker */}
            <Marker coordinates={indiaCoordinates}>
              <g>
                <circle
                  r={8}
                  fill="#2563eb"
                  className="animate-pulse"
                />
                <circle
                  r={4}
                  fill="#ffffff"
                />
              </g>
            </Marker>

            {/* Destination Markers */}
            {routes.map((route, index) => (
              <Marker
                key={index}
                coordinates={route.coordinates}
              >
                <g>
                  <circle
                    r={6}
                    fill="#22c55e"
                  />
                  <text
                    textAnchor="middle"
                    y={-12}
                    className="fill-white text-[10px]"
                  >
                    {route.name}
                  </text>
                </g>
              </Marker>
            ))}
          </ComposableMap>
        </div>
      </div>
    </section>
  );
}