import { useEntries } from '../../context/EntryContext';
import Entry from './Entry';
// useEntries import and Entry
//EntryList Function
export default function MessageList() {
  const { messages } = useEntries();

  return (
    <div>
      <ul>
        {messages.map((entry) => {
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
// const {entries}

//return ul, map of li name and message <Entry entry={entry}
