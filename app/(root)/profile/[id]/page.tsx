
const Page = async ({params}: ParamsWithSearch) => {
    const { id } = await params;

    return (
       <div className="text-2xl font-karla">USER ID : {12345} </div>
    )
}
export default Page
