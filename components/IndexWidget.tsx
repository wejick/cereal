type Props = {
  id: string;
  shard: string;
  doc: number;
  size: number;
};

export default function IndexWidget(
  { id, shard, doc, size }: Props,
) {
  const stats = [
    { title: "shard", value: shard },
    { title: "doc", value: doc },
    { title: "size", value: size },
  ];
  return (
    <div
      name="index-widget"
      class="w-56 py-1 px-1 font-mono text-sm font-thin"
    >
      <div name="id" class="">{id}</div>
      <div name="stats">
        {stats.map((item) => (
          <span class="text-xs font-sans px-1">{item.title}: {item.value}</span>
        ))}
      </div>
    </div>
  );
}
