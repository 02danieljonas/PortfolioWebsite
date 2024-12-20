export default function Numerals({ numbers }: { numbers: number[] }) {
    console.log(numbers.toString());
    return (
        <div className="h-full flex">
            {numbers.map((n) => (
                <img
                    className="h-full"
                    src={`/kaktovik-numerals/${n}.svg`}
                    alt=""
                />
            ))}
        </div>
    );
}
