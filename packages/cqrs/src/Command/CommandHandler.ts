import type Command from './Command'

abstract class CommandHandler<R, C extends Command> {
  public abstract handle(command: C): Promise<R>
}

export default CommandHandler
