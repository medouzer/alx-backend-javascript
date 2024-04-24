export default function guardrail(mathFunction) {
  let queue = [];

  try {
    queue.push(mathFunction());
    queue.push('Guardrail was processed');
  } catch (e) {
    queue.push(e.message);
    queue.push('Guardrail was processed');
  }
  return queue;
}