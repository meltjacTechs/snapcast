import SharedHeader from "@/components/SharedHeader";

const Page = () => {
    return (
        <main className="wrapper page">
            <SharedHeader subHeader={"Public Library"} title={"All Videos"} />
            <h1 className="text-2xl font-karla">Welcome to SnapCast</h1>
        </main>
    )
}
export default Page
