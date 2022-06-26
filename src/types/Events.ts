interface EventRegistry {
  [eventName: string]: Callback[];
}

type Callback = (error?: Error) => void;
type ListenerFunc = (eventName: string, callback: Callback) => void;
type TriggerFunc = (eventName: string, error?: Error) => void;

export interface Events {
  on: ListenerFunc;
  trigger: TriggerFunc;
}
