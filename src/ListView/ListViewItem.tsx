import clsx from 'clsx';




function ListViewItem({subject, body, read, onMessageRead} : any) {
    return <>
        <button 
            onClick = {onMessageRead}
            className={clsx('item', read && 'item-read')}>
            <p className="subject">{subject}</p>
            <p className="body">{body}</p>
        </button>
    </>
}

export default ListViewItem