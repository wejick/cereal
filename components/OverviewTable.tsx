import NodeWidget from "../components/NodeWidget.tsx";
import IndexWidget from "../components/IndexWidget.tsx";
import ShardBlockWidget from "./ShardBlockWidget.tsx";

type Props = {
  THead: Array<any>;
  TBody: [];
};

export default function Header({ THead, TBody }: Props) {
  return (
    <table class="table-fixed border-1">
      <thead>
        <tr class="border-1">
          <td class="border-1">Nodes</td>
          {THead.map((index) => (
            <td class="border-1">
              <IndexWidget
                id={index.id}
                shard={index.shard}
                doc={index.doc}
                size={index.size}
              />
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border-1">
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
          </td>
          <td class="border-1">
            <ShardBlockWidget count={3} />
          </td>
          <td class="border-1">
            <ShardBlockWidget count={12} />
          </td>
          <td class="border-1">
            <ShardBlockWidget count={5} />
          </td>
          <td class="border-1">
            <ShardBlockWidget count={6} />
          </td>
          <td class="border-1">
            <ShardBlockWidget count={3} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
