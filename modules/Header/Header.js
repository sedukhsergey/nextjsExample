import Link from 'next/link';

const Header = () => {
    const styles = {
        background: '#cad'
    }
    return (
        <div style={styles}>
            <Link href="/dashboard">
                <a>go to the dashboard</a>
            </Link>
            <Link href="/" >
                <a>go to the main</a>
            </Link>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae distinctio eum ex exercitationem expedita impedit laboriosam nostrum nulla odit omnis optio pariatur quia quis sapiente, sequi similique veritatis voluptates.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsam libero molestiae neque quasi, velit. Aliquam eius expedita hic in iusto libero repellendus ut voluptate. Adipisci expedita quod suscipit ullam.
        </div>
    )
}

export default Header
