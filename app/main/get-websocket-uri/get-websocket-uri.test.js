import getWebSocketUri from "./get-websocket-uri";

describe("getWebSocketUri", () => {
  const expectedUrl =
    "wss://www.pathofexile.com/api/trade2/live/poe2/Standard/qqDMeRLCg";

  describe("when `live` is included in the URL", () => {
    describe("when the last element is a `/`", () => {
      const urlWithSlash =
        "https://www.pathofexile.com/trade2/search/poe2/Standard/qqDMeRLCg/live/";

      it("returns the formatted WebSocket URL", () => {
        const actualUrl = getWebSocketUri(urlWithSlash);

        expect(actualUrl).toEqual(expectedUrl);
      });
    });

    describe("when the last element is not a `/`", () => {
      const urlWithoutSlash =
        "https://www.pathofexile.com/trade2/search/poe2/Standard/qqDMeRLCg/live";

      it("returns the formatted WebSocket URL", () => {
        const actualUrl = getWebSocketUri(urlWithoutSlash);

        expect(actualUrl).toEqual(expectedUrl);
      });
    });
  });

  describe("when `live` is not included in the URL", () => {
    describe("when the last element is a `/`", () => {
      const urlWithSlash =
        "https://www.pathofexile.com/trade2/search/poe2/Standard/qqDMeRLCg/";

      it("returns the formatted WebSocket URL", () => {
        const actualUrl = getWebSocketUri(urlWithSlash);

        expect(actualUrl).toEqual(expectedUrl);
      });
    });

    describe("when the last element is not a `/`", () => {
      const urlWithoutSlash =
        "https://www.pathofexile.com/trade2/search/poe2/Standard/qqDMeRLCg";

      it("returns the formatted WebSocket URL", () => {
        const actualUrl = getWebSocketUri(urlWithoutSlash);

        expect(actualUrl).toEqual(expectedUrl);
      });
    });
  });
});
