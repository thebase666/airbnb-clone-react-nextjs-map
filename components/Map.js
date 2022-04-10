import getCenter from "geolib/es/getCenter";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import Image from "next/image"

//怎么处理的初始坐标 
function Map({ searchResults }) {

  const [selectedLocation, setSelectedLocation] = useState({})

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat
  }));//处理数据 返回列表 object经纬度  forEach没有返回值 map有返回值 用map更容易处理

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });//初始化就用url处理后的结果


  return (
    <ReactMapGL
      mapStyle="mapbox://styles/heliummixoptimal/ckxdcionp0idr14qmnn76ykci"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewPort) => setViewport(nextViewPort)}
      className="rounded-xl"
    >
      {searchResults.map(result => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p role="img"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer animate-bounce">
              <LocationMarkerIcon className="text-blue-400 h-7 " /></p>
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
              className="z-50 text-sm font-bold text-red-500"
            >
              <div className="relative ">
                <Image src={result.img} height={100} width={220} className="rounded-lg " />
                <div className="">
                  <p className="text-xs text-red-500 ">{result.title}</p>
                  <p className="text-xs font-semibold text-black">{result.price}</p>
                </div>
              </div>
            </Popup>
          ) : (//可直接返回false
            false
          )}

        </div>
      ))}
    </ReactMapGL>
  )
}

export default Map
