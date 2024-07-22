export default function Section({title="Title", children}) {
    return (
        <>
            <h1 className="my-4 text-xl underline font-semibold">{title}</h1>
            <section className="flex gap-4 whitespace-nowrap flex-wrap py-4">
                {children}
            </section>
            <hr className="my-4" />
        </>
    )
}