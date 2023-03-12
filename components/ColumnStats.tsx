type dataType = {
  name: string;
  data: string;
};
type Props = {
  data: Array<dataType>;
};

export default function ColumnStats({ data }: Props) {
  return (
    <div class="bg-white dark:bg-gray-800 dark:text-white w-full py-4 px-6 flex flex-col md:flex-row gap-4">
      <ul class="flex items-center gap-6">
        {data.map((item) => (
          <li class="bg-gray-100 dark:bg-green-800 dark:text-gray-100 dark:border-gray-400 py-3 px-8 border-1">
            <div class="font-bold ml-1">{item.name}</div>
            <div class="ml-1 text-center">{item.data}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
