import Image from "next/image";

const SharedHeader = ({ subHeader, title, userImg } : SharedHeaderProps) => {
    return (
        <header className="header">
            <section className="header-container">
                <div className="details">
                    {userImg &&
                    <Image src={userImg || '/assets/images/dummy/jpg'} alt="user" width={66} height={66} className="rounded-full" />
                }

                <article>
                    <p>{subHeader}</p>
                    <h1>{title}</h1>
                </article>
                </div>
            </section>
        </header>
    )
}
export default SharedHeader
