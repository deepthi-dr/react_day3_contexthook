import ComponentB from './componentB'

function ComponentA({ user }) {
    return (
        <div>
            <ComponentB user={user} />
        </div>
    )
}

export default ComponentA