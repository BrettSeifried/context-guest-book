import { useEntries } from '../../context/EntryContext';
import Entry from './Entry';

export default function MessageList() {
  const { message } = useEntries();

  return (
    <div>
      <ul>
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
