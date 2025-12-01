self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/gallery(?:/.*)?"
          }
        ],
        "source": "/gallery/:nxtIid",
        "destination": "/gallery/(.):nxtIid"
      },
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/gallery(?:/.*)?"
          }
        ],
        "source": "/gallery/:nxtIid",
        "destination": "/gallery/(.):nxtIid"
      },
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/gallery(?:/.*)?"
          }
        ],
        "source": "/gallery/:nxtIid",
        "destination": "/gallery/(.):nxtIid"
      },
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/gallery(?:/.*)?"
          }
        ],
        "source": "/gallery/:nxtIid",
        "destination": "/gallery/(.):nxtIid"
      },
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/gallery(?:/.*)?"
          }
        ],
        "source": "/gallery/:nxtIid",
        "destination": "/gallery/(.):nxtIid"
      },
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/gallery(?:/.*)?"
          }
        ],
        "source": "/gallery/:nxtIid",
        "destination": "/gallery/(.):nxtIid"
      }
    ],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()