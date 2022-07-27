import { useEntries } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';
import Entry from './Function';
import './guestList.css';

export default function MessageList() {
  const { message } = useEntries();
  const { user } = useUser();

  return (
    <div className="returns">
      <ul className="dm">
        {message.map((entry) => {
          return (
            <li key={`${user}-${entry.message}`}>
              <Entry entry={entry} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
