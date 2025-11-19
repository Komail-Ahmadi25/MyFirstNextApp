import Counter from './counter';
export const metadata = {
    title: "Counter",
    description: "Counter page",
}
function page() {
    // const [value, setValue] = useState(0);
    return (
        <Counter />
    )
}

export default page
