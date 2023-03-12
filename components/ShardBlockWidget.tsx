type Props = {
    count: number
  };
export default function ShardBlockWidget({ count }: Props) {
    const box = []
    for(let i=0;i<count;i++) {
        box.push(<span class=" bg-green-500 mx-1 my-1 text-center">{i}</span>)
    }
return (
    <div class="font-mono text-sm font-thin grid grid-cols-5">
        {box}
    </div>
)
}