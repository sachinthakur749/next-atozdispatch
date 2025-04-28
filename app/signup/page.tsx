import SignupForm from "@/components/SignupForm";
import Link from "next/link";
import React from "react";
import { TiTick } from "react-icons/ti";

const page = () => {
  return (
    <div className="signup-container">
      <div className="signup-left">
        <div className="left-top">
          <div>
            <video width="100%" className="video-frame" controls={true}>
              {/* <source src={bannerVideo} type="video/mp4" /> */}
              Your browser does not support HTML video.
            </video>
          </div>
          <div>
            <h4>Sign Up & Get A Website Like This</h4>
            <p className="sub-title">All future features readily available</p>
            <ul>
              <li>
                <TiTick size={25} style={{ color: "#54A937" }} />
                Get Your Website Online Quickly. No Setup Fee!
              </li>
              <li>
                {" "}
                <TiTick size={25} style={{ color: "#54A937" }} /> No Hassle For
                Content & Server Setup
              </li>
              <li>
                {" "}
                <TiTick size={25} style={{ color: "#54A937" }} /> Own Branded
                Website With Booking System
              </li>
              <li>
                {" "}
                <TiTick size={25} style={{ color: "#54A937" }} /> 30 Days Free
                Trial
              </li>
            </ul>
          </div>
        </div>

        <div className="reviews">
          <h4>AS SEEN ON</h4>
          <a
            href="https://www.wicz.com/our-apologies"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              alt=""
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDE3IDQzMCIgd2lkdGg9IjEwMTciIGhlaWdodD0iNDMwIj48c3R5bGU+PC9zdHlsZT48ZyBpZD0ibGF5ZXIxIj48ZyBpZD0iZzE2MTQiPjxwYXRoIGlkPSJwYXRoOTkxLTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTg5NS4yMSAyMTUuMDhsMTIxLjYzIDIxNC4zNC0xNDAuMDkuMjQtNTEuNDUtOTAuOTYtNTEuNDQgOTAuOTYtMTQwLjA4LS4yNCAxMjEuNjMtMjE0LjM0TDYzMy43OCAwaDEzOS4zOGw1Mi4xNCA5MS45TDg3Ny40NiAwaDEzOS4zOEw4OTUuMjEgMjE1LjA4ek00ODMuNC4xNGMxMTguNTUgMCAyMTQuNjYgOTYuMSAyMTQuNjYgMjE0LjY0IDAgMTE4LjU0LTk2LjExIDIxNC42NC0yMTQuNjYgMjE0LjY0LTExOC41NiAwLTIxNC42Ni05Ni4xLTIxNC42Ni0yMTQuNjRDMjY4Ljc0IDk2LjI0IDM2NC44NC4xNCA0ODMuNC4xNHpNNTIxIDEyNi41M2MwLTIwLjExLTE3LjQzLTM4LjEyLTM3LjAxLTM4LjEyLTE5LjYgMC0zNS40NCAxOC4wMS0zNS40NCAzOC4xMmwtLjA0IDE3NS44M2MwIDIwLjEzIDE1Ljg4IDM2LjQzIDM1LjQ3IDM2LjQzIDE5LjU5IDAgMzcuMDItMTUuNzkgMzcuMDItMzUuOTFWMTI2LjUzek0uMDIgNDI5LjQyVjBoMjY3LjAzbDcuODcgMTE3LjEzSDEzMC4wMXY1Ni4yaDExOC4xOHYxMTcuNUgxMzAuMDF2MTM4LjU5SC4wMnoiIGZpbGw9IiMwMDAiLz48L2c+PC9nPjwvc3ZnPg=="
            />
          </a>
          <a
            href="https://digitaljournal.com/pr/news/taxi-web-design-offers-comprehensive-solutions-to-transport-industry-professionals"
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt=""
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NTEuNTkgMjI1LjA3Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzAwMDAwMDt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9IkNhcGFfMiIgZGF0YS1uYW1lPSJDYXBhIDIiPjxnIGlkPSJDYXBhXzItMiIgZGF0YS1uYW1lPSJDYXBhIDIiPjxyZWN0IGNsYXNzPSJjbHMtMSIgeT0iMC43OSIgd2lkdGg9IjU5LjI1IiBoZWlnaHQ9IjkwIi8+PHBhdGggZD0iTTY5LjU5LDEuNGgzNC42NWEzOC44MSwzOC44MSwwLDAsMSwxNywzLjQ3LDI3LjYxLDI3LjYxLDAsMCwxLDExLjMzLDkuNzksNDIuMzYsNDIuMzYsMCwwLDEsNC44LDEzLDg2Ljg4LDg2Ljg4LDAsMCwxLDEuNjgsMTguMDcsODYuNCw4Ni40LDAsMCwxLTEuNzEsMTgsNDguNjEsNDguNjEsMCwwLDEtNC41MiwxMy4xMSwyNy42NCwyNy42NCwwLDAsMS0xMS4yMSw5Ljg2LDM3Ljg3LDM3Ljg3LDAsMCwxLTE2Ljg0LDMuNDdINjkuNTlWODMuOTFoNi4xN1Y3LjY3SDY5LjU5Wk05MS4xLDg0SDEwMXE3LjY5LDAsMTEtMi4xOSwxMS45MS03LjU1LDExLjkyLTM2LjQ1LDAtMjcuOTMtMTEuNDMtMzUuMTFhMTQuMjEsMTQuMjEsMCwwLDAtNS4wNy0yLDM3LjE1LDM3LjE1LDAsMCwwLTcuMDktLjZIOTEuMVoiLz48cGF0aCBkPSJNMTQxLjc2LDEuNEgxNzJWNy42N2gtN1Y4My45MWg3djYuMjdIMTQxLjc2VjgzLjkxaDcuODNWNy42N2gtNy44M1oiLz48cGF0aCBkPSJNMjQxLjM3LDc2Ljg1UTIzMS4wNSw5Mi4xOCwyMTIuMTYsOTEuNywxOTEsOTEuNTIsMTgyLjcxLDc3LjUydi4wNlExNzYsNjcuMDUsMTc2LDQ2LjNxMC0yMS42LDcuMDktMzIuMTJ2LjA2UTE5MSwuMTgsMjEzLjA4LDBhMzcuODEsMzcuODEsMCwwLDEsMjQuNjMsOC40NmwxLjk1LDE1LjY0aC03LjI3YTE4LjI0LDE4LjI0LDAsMCwwLTQuOTUtMTIuNzJxLTQuODktNS4xMi0xNC4zLTUuMTctMTAuNTEtLjEyLTE1LjkyLDEwdC01LjgzLDI5Ljg3cS40MiwxOS40MSw1LjYyLDI5LjQ4dDE1LjIxLDEwYTIxLjUzLDIxLjUzLDAsMCwwLDgtMS42NywxNy44MywxNy44MywwLDAsMCw2LjA4LTQuMjlWNTYuNDFoLTguNjhWNTBoMjkuMDl2Ni4zMmgtNS4zOFoiLz48cGF0aCBkPSJNMjQ4LjI0LDEuNGgzMC4xOVY3LjY3aC03VjgzLjkxaDd2Ni4yN0gyNDguMjRWODMuOTFoNy44MlY3LjY3aC03LjgyWiIvPjxwYXRoIGQ9Ik0zNDcuMjMsMS40bDIuMzIsMTYuMTJIMzQzcS0xLjQ3LTkuODUtNi45LTkuODVIMzIyLjc4VjgzLjkxaDYuMDV2Ni4yN0gzMDEuMDlWODMuOTFoNi4zNlY3LjY3SDI5NC4xOXEtNS40NCwwLTYuOTEsOS44NWgtNi42TDI4MywxLjRaIi8+PHBhdGggZD0iTTM0Mi43NSw5MC4xOFY4NGg2LjU0cTYuNDgtMjAuNjIsMTMtNDEuMzJUMzc1LjIsMS40SDM4Mkw0MDguNjMsODRINDE1djYuMjFIMzg4LjUyVjg0SDM5M2wtMS44OS01LjlxLS45MS0yLjg2LTEuODMtNS42OWwtMS44NC01LjcycS0uOTItMi44OS0xLjg5LTUuOTNIMzY0Yy0uNjUsMi0xLjI4LDQtMS44Nyw1LjlzLTEuMTgsMy44LTEuNzcsNS42OS0xLjE4LDMuNzgtMS43Nyw1LjY5LTEuMjEsMy44OS0xLjg2LDZoNC42NHY2LjIxWk0zODMuNjMsNTQuNHEtMi4zMS02Ljk0LTQuNTItMTMuNjlUMzc0LjY1LDI3cS0yLjI2LDcuMDUtNC4zNCwxMy42M0wzNjYsNTQuNFoiLz48cGF0aCBkPSJNNDQyLjEsODMuOTFoMjkuMjFxNS40NCwwLDYuOTEtOS45Mmg2LjZMNDgyLjUsOTAuMThINDIwLjU5VjgzLjkxaDYuMDVWNy42N2gtNi4xN1YxLjRINDQ4VjcuNjdINDQyLjFaIi8+PHBhdGggZD0iTTgyLjEyLDExNy43OWgtNi42di02LjI3SDEwNHY2LjI3SDk3LjUydjc0LjZxLS4xMiwxNC40OC01LjQ0LDIyLjc2LTUuNTEsOC41Mi0xOS4yNSw5LjkybC0yLjY5LTUuODVxMTItLjQyLDEyLTI3LjA3WiIvPjxwYXRoIGQ9Ik0xNDIuNzQsMTEwLjA2cTM0LjQ3LDAsMzQuNDcsNDUuODJUMTQyLjgsMjAxLjc2cS0zNC40LDAtMzQuNC00NS44OFQxNDIuNzQsMTEwLjA2Wm0wLDYuMzNxLTE4Ljk0LDAtMTguOTQsMzkuNDl0MTksMzkuNTVxMTguOTQsMCwxOC45NS0zOS40OVQxNDIuNzQsMTE2LjM5WiIvPjxwYXRoIGQ9Ik0yMzIuMjYsMTExLjUyaDIwdjYuMjdIMjQ2djQ1Ljg4cTAsMzcuNzktMjksMzcuNzktMTcuMjIsMC0yNC42Mi0xMS4xNC02LTkuMTgtNi0yNi44M3YtNDUuN2gtNi4zdi02LjI3aDI3LjY5djYuMjdoLTZWMTY0cTAsMTUuMzUsMi4zOCwyMS4yNCwzLjcyLDkuODUsMTUuODMsOS44NiwxOC4zMywwLDE4LjMzLTMxLjY0VjExNy43OWgtNi4wNVoiLz48cGF0aCBkPSJNMjgwLjQ0LDE5NEgyODd2Ni4yN0gyNTguODFWMTk0bDYuMTcuMDZ2LTc2LjNoLTYuMTd2LTYuMjdoMzcuNGEzNi43NSwzNi43NSwwLDAsMSwxMC43LDEuNSwzMC45NCwzMC45NCwwLDAsMSw4LjkyLDQuMjgsMjMuMjYsMjMuMjYsMCwwLDEsNi42OSw3LjgyLDIxLjY2LDIxLjY2LDAsMCwxLDIuMzUsMTAuMTMsMjAuNDgsMjAuNDgsMCwwLDEtMS42Miw4LDI1LjE3LDI1LjE3LDAsMCwxLTQuNjEsNy4xMiwzMC43NCwzMC43NCwwLDAsMS02LDQuOCwyNS42OCwyNS42OCwwLDAsMS03LDMsNjksNjksMCwwLDAsNy44OSwxN0ExNTYuMiwxNTYuMiwwLDAsMCwzMjcuNjIsMTk0aDYuNnY2LjI3aC0xOS44YTE5MS42OSwxOTEuNjksMCwwLDEtMTMuMzgtMjAsMTgyLjI5LDE4Mi4yOSwwLDAsMS0xMC40NS0yMUgyODAuNDRabTAtNDEuMTloMTUuNDFhOS4xNiw5LjE2LDAsMCwwLDUtMS41NSwxNy45LDE3LjksMCwwLDAsNC41NS00LjQ3LDI4LjI2LDI4LjI2LDAsMCwwLDIuOS01LjcyLDE2Ljg0LDE2Ljg0LDAsMCwwLDEuMDctNS43OCwxOS41OSwxOS41OSwwLDAsMC00LTEyLjIzLDEzLjIzLDEzLjIzLDAsMCwwLTEwLjg4LTUuMzZsLTE0LC4wNloiLz48cGF0aCBkPSJNNDAxLjg2LDExNy43OVYyMDAuM2gtOC4zN0wzNTMsMTMwLjE0VjE5NGg2djYuMjdIMzM5LjcyVjE5NGg2LjE3VjExNy43OWgtNi4xN3YtNi4yN2gxOS43M2wzNS4yNiw2MC4zNlYxMTcuNzloLTZ2LTYuMjdINDA4djYuMjdaIi8+PHBhdGggZD0iTTQxMS41MiwyMDAuM3YtNi4yMWg2LjU0cTYuNDgtMjAuNjIsMTMtNDEuMzF0MTMtNDEuMjZoNi43OGwyNi42NSw4Mi41N2g2LjQxdjYuMjFINDU3LjI5di02LjIxaDQuNTJsLTEuODktNS45LTEuODMtNS42OWMtLjYxLTEuODgtMS4yMy0zLjc5LTEuODQtNS43MmwtMS44OS01LjkzSDQzMi43M3EtMSwzLTEuODcsNS45dC0xLjc3LDUuNjlsLTEuNzcsNS42OXEtLjg4LDIuODctMS44Nyw2aDQuNjV2Ni4yMVptNDAuODgtMzUuNzhxLTIuMzEtNi45My00LjUyLTEzLjY5dC00LjQ2LTEzLjY5cS0yLjI2LDcuMDYtNC4zNCwxMy42M2wtNC4zNCwxMy43NVoiLz48cGF0aCBkPSJNNTA4Ljg3LDE5NGgyOS4yMXE1LjQ1LDAsNi45MS05LjkxaDYuNmwtMi4zMywxNi4xOGgtNjEuOVYxOTRoNi4wNVYxMTcuNzloLTYuMTd2LTYuMjdINTE0Ljh2Ni4yN2gtNS45M1oiLz48L2c+PC9nPjwvc3ZnPg=="
            />
          </a>
          <a
            href="https://www.newschannelnebraska.com/our-apologies"
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt=""
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAwMCAzMDAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iNDEuMyA2MjUuOCAyOTA3LjcgMTcyNy4zIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMDAwMDAwO30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGltYWdlIHN0eWxlPSJkaXNwbGF5Om5vbmU7b3ZlcmZsb3c6dmlzaWJsZTsiIHdpZHRoPSIyNTAiIGhlaWdodD0iMTUwIiB4bGluazpocmVmPSJFMDc1QjMxRi5wbmciIHRyYW5zZm9ybT0ibWF0cml4KDExLjc0OTYgMCAwIDExLjc0OTYgMzEuMjk0MSA2MTguNzc2NSkiPgo8L2ltYWdlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjg0MSwyMzUzLjFIMTQ5LjNjLTU5LjcsMC0xMDgtNDguNC0xMDgtMTA4VjczMy44YzAtNTkuNyw0OC40LTEwOCwxMDgtMTA4SDI4NDFjNTkuNywwLDEwOCw0OC40LDEwOCwxMDggIHYxNTExLjNDMjk0OS4xLDIzMDQuOCwyOTAwLjcsMjM1My4xLDI4NDEsMjM1My4xeiIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjgwNS42LDIxMDIuNmMwLDAtMjMuMy00NC41LTQ4LjctNzguNGMtMjUuNC0zMy45LTQ0LjUtODQuNy01NS4xLTEyMC43Yy0xMC42LTM2LTUwLjgtNjcuOC00Ni42LTExNi41ICBjNC4yLTQ4LjctNi40LTIzNy40LTUwLjgtMjg3LjFjLTI1LjQtMjQuMi0yOS42LTQ5LjctMjcuNS03Ny4yYzIuMS0yNy41LTIuMS04OC45LTI5LjYtMTIwLjdjLTI3LjUtMzEuOC00Ni42LTc0LjEtNDIuNC0xNzMuNyAgYy00NC41LDAtNjcuOCwwLTY3LjgsMHMtNDYuNi05MS4xLTkzLjItOTcuNGMtNDYuNi02LjQtNzQuMS0xMC42LTg2LjgtMzMuOWMtMTIuNy0yMy4zLTM2LTYuNC02Ny44LDBjLTMxLjgsNi40LTQyLjMtMi43LTU5LjMtMTEuOSAgYy0xNi45LTkuMy02MS40LTUtNzQuMSwyMC40cy00Mi4zLDQwLjItNTUuMSw4LjVjLTEyLjctMzEuOC01MC44LTI5LjctNzQuMS00NC41Yy0yMy4zLTE0LjgtNTAuOC00Mi40LTUwLjgtNDIuNEgyNjIuM3Y3OTQuMUg0MzYgIHYtNTY3LjVoMjIyLjN2OTkuNWMwLDAsMjQzLjUtMjQ5LjksNDgwLjctNC4yYy05NS4zLDYzLjUtMjcxLjEsNDE5LjMsNjEuNCw2NTYuNWMwLDQ2LjYsMCw0Ni42LDAsNDYuNnY2LjRIOTU5Ljh2LTQ3Ni41ICBjMCwwLTE3LjYtMTI0LjktMTM0LjEtMTI3LjFjLTEwNS45LDIuMS0xNTAuNCwxMDgtMTUwLjQsMTU4LjhjMCw1MC44LDAsMjA3LjUsMCwyMDcuNWgxNjcuM3YzODEuMkgyODA1LjZ6IE0xMzU3LjIsMTM4Ni44ICBjMTU4LjgtNjUuNiwyNDcuOCw2OS45LDI0Ny44LDY5LjloMjU2LjJjLTI3LjUtMTgwLTIwMy4zLTI3NS4zLTIwMy4zLTI3NS4zdi0zMS44bDIzMC44LTIuMXY3OC4zYzAsMCwwLDAsMTQuOCwwICBjMTIuNy0yNS40LDEyOS4yLTEwMS42LDI2NC43LTkxLjFjMjI4LjcsMjcuNSwyNTYuMiwyNzkuNSwyNTYuMiwyNzkuNXY1NDQuMmgtMjQzLjVjMCwwLDAtNDAyLjQsMC00MzguNHMtMTAuNi0xNjUuMi0xMzUuNS0xNjUuMiAgYy0xMzkuOCw4LjUtMTQxLjksMTQ0LjktMTQxLjksMTQ0Ljl2NDU4LjZoLTI0NS43YzAsMCwwLDAsMC0yOS43YzE3Ny45LTg4LjksMjAzLjMtMjQ5LjksMjAzLjMtMjQ5LjlzLTE5NC44LTIuMS0yNzcuNC0yLjEgIGMtMTE0LjQsMTE0LjQtMjU2LjIsNDYuNi0zMDIuOC0yOS42QzEyMzIuMiwxNTU4LjMsMTI2OC4yLDE0MzEuMywxMzU3LjIsMTM4Ni44eiIvPgo8L3N2Zz4="
            />
          </a>
          <a
            href="https://www.marketwatch.com/press-release/taxi-web-design-offers-comprehensive-solutions-to-transport-industry-professionals-2023-02-14"
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt=""
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NzMuMTIgMjI1Ljg3Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzAwMDAwMDt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9IkNhcGFfMiIgZGF0YS1uYW1lPSJDYXBhIDIiPjxnIGlkPSJDYXBhXzItMiIgZGF0YS1uYW1lPSJDYXBhIDIiPjxwYXRoIGQ9Ik0yMTEuNDksMjcuNCwyMTAsMzQuNzhoLS40NWMtMS44OS00LjEzLTcuMTYtOS43Ni0xOC43OC05Ljc2LTE4LjgsMC0zNy45MywxNC41MS00Mi4yOSwzNy40Mi0zLjYyLDIwLDYsMzcuNjgsMjguMywzNy42OCw4LjE0LDAsMTcuNTEtMy4yNiwyMi4zOS0xMGguMzlsLTEuMyw3LjUxSDIxOWwxMy03MC4xMlptLTYuODMsMzQuOTRjLTEuNCw2Ljg3LTcuOTEsMTgtMjAuOTIsMThzLTE1LjM5LTExLjI5LTE0LjI1LTE3LjhhMjEuNjksMjEuNjksMCwwLDEsMjAuNzUtMThDMjAyLjE1LDQ0LjY3LDIwNi4xNSw1NC4wOCwyMDQuNjYsNjIuMzRaIi8+PHBhdGggZD0iTTI0My44MywyNy40aDE5LjUyTDI2MiwzNC43OGguMzlBMjEuOTEsMjEuOTEsMCwwLDEsMjgxLjg3LDI1bC00LDIxLjE1Yy05Ljc2LDAtMTcsMi4xNS0xOC45MSwxM2wtNy4xMiwzOC40M0gyMzAuNzlaIi8+PHBvbHlnb24gcG9pbnRzPSIyOTUuODkgMCAzMTYuOTEgMCAzMDcuMDIgNTIuODEgMzA3LjQxIDUyLjgxIDMzMS42OCAyNy40IDM1Ni4zNSAyNy40IDMyNC4zIDU4LjIxIDM0Mi43MSA5Ny41MSAzMTguOTMgOTcuNTEgMzA1LjM5IDYzLjcxIDMwNS4wNCA2My43MSAyOTguODggOTcuNTEgMjc3Ljc0IDk3LjUxIDI5NS44OSAwIi8+PHBhdGggZD0iTTM5MCwyNC45MmMtMjEuMjgsMC00MC4xOCwxOC4yNi00My43LDM3Ljc4LTMuODcsMjAuNzksMTAuMTYsMzcuMTksMzAuMywzNy4xOWEzOC44NCwzOC44NCwwLDAsMCwyMS02LjUxLDUyLjI1LDUyLjI1LDAsMCwwLDE3LjU0LTE3LjkzSDM5My43YTE4LjI1LDE4LjI1LDAsMCwxLTE0LDYuNTFjLTguMTMsMC0xNC4yNS00Ljg4LTEzLjg5LTEzLjI0aDUyLjY1YTI3LjksMjcuOSwwLDAsMCwxLjQ5LTUuNTNDNDIzLjkyLDQxLjk0LDQxMS40LDI0LjkyLDM5MCwyNC45MlpNMzY4Ljc0LDU0LjY5YTE5LjczLDE5LjczLDAsMCwxLDE4LjI2LTEyYzEwLjksMCwxMy41Myw3Ljg3LDEzLjUzLDEyWiIvPjxwb2x5Z29uIHBvaW50cz0iMTIwLjc4IDAgODMuNzIgNTUuNTcgODMuNDkgNTUuNTcgODMuNDkgMCA2NS41OSAwIDAgOTcuNTEgMjUuNDEgOTcuNTEgNjIuMjEgNDEuOTQgNjIuNTcgNDEuOTQgNjIuNTcgOTcuNTEgODAuNTkgOTcuNTEgMTE3LjM5IDQxLjk0IDExNy43OCA0MS45NCAxMTcuNzggOTcuNTEgMTM4LjggOTcuNTEgMTM4LjggMCAxMjAuNzggMCIvPjxwYXRoIGQ9Ik00NzMuMTIsMjcuNEg0NTkuODVsMy44Ny0yMC44OUg0NDUuMzNsLTEuNDksOGMtMS42Myw5LjE0LTcuMzksMTEuOTEtMTUsMTIuNzZoMGwtMy4yNiwxNS45MUg0MzZMNDI1Ljk0LDk3LjYxaDIwLjg5bDEwLTU0LjIxaDEzLjM4WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMyMC4zOSwxOTYuODVjLTYuODksMTUuODctMjMuMjksMjguODktNDIuMjksMjguODktMjEuMjgsMC0zNC40My0xNi43Ni0zMC42OS0zNy42OHMyMi43OC0zNy4yOSw0My45My0zNy4yOWMxOC41NCwwLDMxLjMsMTIuNCwzMS42OSwyOS41NUgzMDEuNzVhMTIuNDUsMTIuNDUsMCwwLDAtMTMuNDEtOS43NmMtOS43Ni0uNDktMTgsNy42NC0xOS45MSwxNy43NnMzLjI2LDE3LjksMTMuNDEsMTcuOWEyMCwyMCwwLDAsMCwxNi44OC05LjM3aDIxLjY3Wk0xNDYuNzEsMTAxLjEybC00MC44MywyNC43NmgxMS41NWwtMzcsNTUuNThoLS4zOVYxMjUuODhoLTE4bC0zNyw1NS41OGgtLjM2VjEyNS44OGgtMjF2OTcuNjFIMjJsMzYuODYtNTUuN2guMzl2NTUuNTdoMThsNjUuMzMtOTcuNjFoMTAuNjFabTM5Ljc2LDEyMi4yNEgxNjUuNjhsMS40LTcuNTFoLS4zOWMtNC44OCw2LjktMTQuMjUsMTAtMjIuMzksMTAtMjIuMjgsMC0zMS45Mi0xNy41MS0yOC4zLTM3LjY4LDQuMTMtMjIuNzcsMjMuNDItMzcuNDIsNDIuMjktMzcuNDIsMTEuNDksMCwxNi44OSw1LjYzLDE4Ljc4LDkuNzZoLjM2bDEuNC03LjM1aDIwLjc5Wm0tMzUuMy0xN2MxMywwLDE5LjUyLTExLjI2LDIwLjkyLTE4LDEuNS04LjM5LTIuNTEtMTcuNzYtMTQuNDEtMTcuNzZhMjEuODMsMjEuODMsMCwwLDAtMjAuNzMsMThjLTEuMTQsNi41MSwxLjUsMTcuNzcsMTQuMjUsMTcuNzdabTEwMC43Ny01My4xN2gtMTNsMy44Ny0yMC43OUgyMjQuMjhsLTEuNTMsOGMtMS42Myw5LjExLTcuMzUsMTEuODctMTUsMTIuNzVoLS4yNmwtMywxNS45MUgyMTVsLTEwLjE5LDU0LjI3aDIwLjkzbDEwLTU0LjE3aDEzLjM3Wm04OC4yNC0yNy4zOWgyMC44OGwtNi41LDM0Ljc4SDM1NWEyMS45MSwyMS45MSwwLDAsMSwxOS43NS05Ljc2YzYuNTEsMCwxNC4yOCwyLjUsMTcuOCw3Ljg3LDQuNDksNi45LDQsMTMsMS42MiwyNS41NEwzODcsMjIzLjI3SDM2Ni4wOGw3LTM4LjE3Yy42NS0zLjI1LDIuNjQtMTQuNzctOC40OS0xNC43Ny0xMS43OCwwLTEzLjc2LDEwLjUxLTE0LjQyLDE0TDM0MywyMjMuMTRIMzIyLjQxWiIvPjwvZz48L2c+PC9zdmc+"
            />
          </a>
          <a
            href="https://www.benzinga.com/pressreleases/23/02/ab30910955/taxi-web-design-offers-comprehensive-solutions-to-transport-industry-professionals"
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt=""
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMiIgYmFzZVByb2ZpbGU9InRpbnkiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDcwLjggNjQuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cjx0aXRsZT5CZW56aW5nYSBMb2dvX3BpdGNoZGVjazwvdGl0bGU+Cjxwb2x5Z29uIGZpbGw9IiMwMDAwMDAiIHBvaW50cz0iNjcuNyw2My44IDExMi45LDYzLjggMTEyLjksNTEuOSA4MS40LDUxLjkgODEuNCwzNy4zIDEwNy41LDM3LjMgMTA3LjUsMjUuNCA4MS40LDI1LjQgODEuNCwxMS45IAoJMTEzLjEsMTEuOSAxMTMuMSwwIDY3LjcsMCAiLz4KPHBvbHlnb24gZmlsbD0iIzAwMDAwMCIgcG9pbnRzPSIxNjcuMyw0MC4yIDEzNy43LDAgMTE3LjMsMCAxMjMuNyw4LjEgMTIzLjcsNjQuMSAxMzcuMyw2NC4xIDEzNy4zLDIyLjEgMTY3LjksNjMuOCAxODEsNjMuOCAxODEsMCAKCTE2Ny4zLDAgIi8+CjxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik00Ny4xLDMxYzYtMS4xLDExLTYuNywxMS0xNC42QzU4LjEsNy45LDUxLjksMCwzOS42LDBIMGw2LjIsNy45djU2SDQxYzEyLjMsMCwxOC43LTcuNywxOC43LTE3LjMKCUM1OS40LDM4LjcsNTQsMzEuOSw0Ny4xLDMxeiBNMTkuOCwxMmgxNy4xYzQuNiwwLDcuNSwyLjcsNy41LDYuN3MtMi45LDYuNy03LjUsNi43SDE5LjhWMTJ6IE0zNy41LDUySDE5LjhWMzcuM2gxNy43CgljNS4yLDAsOC4xLDMuMyw4LjEsNy4zQzQ1LjYsNDkuMiw0Mi41LDUxLjksMzcuNSw1MkwzNy41LDUyeiIvPgo8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNMzgwLjgsNDAuMmg3LjF2Ny41Yy0zLjcsMy04LjMsNC43LTEzLjEsNC44Yy0xMS40LDAtMTkuNC04LjctMTkuNC0yMC40czguMS0yMC40LDE5LjQtMjAuNAoJYzUuOSwwLDExLjQsMy4xLDE0LjYsOC4xbDEwLjgtNkMzOTUuNiw2LjUsMzg3LjUsMCwzNzQuNywwYy0xOC4xLDAtMzMuMSwxMi41LTMzLjEsMzEuOXMxNC44LDMxLjksMzMuMSwzMS45CgljMTAsMC4yLDE5LjUtNC4xLDI2LjEtMTEuNVYyOC43aC0yOS4yTDM4MC44LDQwLjJ6Ii8+Cjxwb2x5Z29uIGZpbGw9IiMwMDAwMDAiIHBvaW50cz0iMzE5LjMsNDAuMiAyODkuNiwwIDI2OS4zLDAgMjc1LjYsOC4xIDI3NS42LDY0LjEgMjg5LjMsNjQuMSAyODkuMywyMi4xIDMxOS45LDYzLjggMzMyLjksNjMuOCAKCTMzMi45LDAgMzE5LjMsMCAiLz4KPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTQ0NiwwaC0yNi4zbDYuMyw4LjFsLTEuMSwzLjFsLTIwLjQsNTIuOWgxNS40bDQtMTAuOGgyNy41bDQsMTAuOGgxNS40TDQ0NiwweiBNNDI3LjQsNDEuMmwxMC0yNy41bDEwLDI3LjUKCUg0MjcuNHoiLz4KPHJlY3QgeD0iMjQ3LjciIGZpbGw9IiMwMDAwMDAiIHdpZHRoPSIxMy43IiBoZWlnaHQ9IjY0LjEiLz4KPHBvbHlnb24gZmlsbD0iIzAwMDAwMCIgcG9pbnRzPSIyMzYuOCwxMSAyMzYuOCwwIDE4OC43LDAgMTg4LjcsMTEuOSAyMTguOSwxMS45IDE4OC43LDUyLjkgMTg4LjcsNjMuOCAyMzcuMyw2My44IDIzNy4zLDUxLjkgCgkyMDYuNCw1MS45ICIvPgo8L3N2Zz4K"
            />
          </a>
          <a
            href="https://www.trustpilot.com/review/atozdispatch.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ width: "110px", height: "60px" }}
              alt=""
              //   src={trust}
            />
          </a>
          {/* <div className="logos">
                <img src="fox.png" alt="Fox" />
                <img src="digital-journal.png" alt="Digital Journal" />
                <img src="market-watch.png" alt="Market Watch" />
                <img src="benzinga.png" alt="Benzinga" />
              </div> */}
        </div>

        {/* <div className="trusted-client">
              <h4>250+ Customers From All Over The World</h4>
              <div className="customer-logos">
                <img src={client1} alt="" />
                <img src={client2} alt="" />
                <img src={client3} alt="" />
                <img src={client4} alt="" />
                <img src={client5} alt="" />
                <img src={client6} alt="" />
              </div>
            </div> */}

        <div className="download-ctn">
          <p style={{ margin: "0px" }}>Download Our App </p>
          <div className="download-section">
            <Link
              target="_blank"
              href={
                "https://apps.apple.com/us/app/a-to-z-dispatch/id6639615450"
              }
            >
              <img
                // style={{
                //   height: "75px",
                //   width: "180px",
                //   objectFit: "contain",
                // }}
                width={200}
                // src={appStoreLogo}
                alt="app-store"
              />
            </Link>
            <Link
              target="_blank"
              href={
                "https://play.google.com/store/apps/details?id=com.a2z.dispatch"
              }
            >
              <img
                // style={{ objectFit: "cover", width: "230px" }}
                width={200}
                // src={googlePlayLogo}
                alt="google-play"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="signup-right">
        <SignupForm />
      </div>
    </div>
  );
};

export default page;
