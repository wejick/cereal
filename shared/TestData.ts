const indicesData = [
    { id: "search-product", shard: "2*2", doc: 255, size: 1024 },
    { id: "search-shop", shard: "2*2", doc: 255, size: 1024 },
    { id: "search-popular", shard: "2*2", doc: 255, size: 1024 },
    { id: "search-autocomplete", shard: "2*2", doc: 255, size: 1024 },
    { id: "search-misc", shard: "2*2", doc: 255, size: 1024 },
  ];
const nodesData = [
    {
      id: "central-2",
      ip: "192.168.1.1",
      heap: 80,
      disk: 25,
      cpu: 45,
      load: 50,
      nodeCoor: true,
      nodeData: true,
      nodeIngest: true,
      nodeMaster: true,
      index : indicesData
    },
    {
      id: "central-2",
      ip: "192.168.1.3",
      heap: 75,
      disk: 25,
      cpu: 60,
      load: 60,
      nodeCoor: false,
      nodeData: true,
      nodeIngest: false,
      nodeMaster: false,
      index : indicesData
    },
  ];

export {indicesData, nodesData}