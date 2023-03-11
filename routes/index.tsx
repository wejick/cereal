import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import ColumnStats from "../components/ColumnStats.tsx";
import NodeWidget from "../components/NodeWidget.tsx";

export default function Home() {
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
      <NodeWidget
        id="central"
        ip="192.168.1.1"
        heap={80}
        disk={25}
        cpu={45}
        load={50}
        nodeCoor={false}
        nodeData={false}
        nodeIngest={false}
        nodeMaster={false}
      />
    </>
  );
}
