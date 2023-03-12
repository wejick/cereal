type Props = {
  id: string;
  ip: string;
  heap: number;
  disk: number;
  cpu: number;
  load: number;
  nodeIngest: boolean;
  nodeMaster: boolean;
  nodeCoor: boolean;
  nodeData: boolean;
};

export default function NodeWidget(
  { id, ip, heap, disk, cpu, load, nodeIngest, nodeMaster, nodeCoor, nodeData }:
    Props,
) {
  const stats = [
    { title: "heap", progress: heap },
    { title: "disk", progress: disk },
    { title: "cpu", progress: cpu },
    { title: "load", progress: load },
  ];
  return (
    <div
      name="node-widget"
      class="w-56 py-1 px-1 font-mono text-sm font-thin"
    >
      <div name="id" class="">{id}</div>
      <div name="ip" class="">{ip}</div>
      <div name="stats-1" class="flex">
        {stats.map((item) => (
          <div class="mr-1 flex-1">
            <span class="text-xs font-sans">{item.title}</span>
            <div class="h-1 w-full rounded-full bg-gray-200 dark:bg-gray-700">
              <div class="h-1 rounded-full bg-green-600" style={"width: "+45+"%"}>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
