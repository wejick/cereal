import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import ColumnStats from "../components/ColumnStats.tsx";

import OverviewTable from "../components/OverviewTable.tsx";

export default function Home() {
  const indices = [
    { id: "search-product", shard: "2*2", doc: 255, size: 1024 },
    { id: "search-shop", shard: "2*2", doc: 255, size: 1024 },
    { id: "search-popular", shard: "2*2", doc: 255, size: 1024 },
    { id: "search-autocomplete", shard: "2*2", doc: 255, size: 1024 },
    { id: "search-misc", shard: "2*2", doc: 255, size: 1024 },
  ];
  const nodes = [
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
    },
  ];
  return (
    <>
      <Head>
        <title>Cereal : Cluster Name [status color]</title>
      </Head>
      <Header active="/" connected={true} />
      <ColumnStats
        data={[
          { name: "Cluster Name", data: "Cluster Tempoyak" },
          { name: "Nodes", data: "1" },
          { name: "Indices", data: "3" },
          { name: "Shards", data: "4" },
          { name: "Docs", data: "1.200" },
          { name: "Size", data: "200MB" },
        ]}
      />
      <div class="bg-white dark:bg-gray-800 dark:text-gray-100 dark:border-gray-400  w-full py-4 px-6">
        <OverviewTable THead={indices} TBody={[]} />
      </div>
    </>
  );
}
