import ComponentC from "./componentC"

function ComponentB({ user }) {
    return (
        <div>
            <ComponentC user={user} />
        </div>
    )
}

export default ComponentB