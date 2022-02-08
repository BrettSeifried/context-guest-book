import { useEntries } from '../../context/EntryContext';
import Entry from './Entry';
import './guestList.css';

export default function MessageList() {
  const { message } = useEntries();

  return (
    <div className="returns">
      <ul className="dm">
        {message.map((entry) => {
          return (
            <li key={`${entry.name}&${entry.message}`}>
              <Entry entry={entry} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
