import ClassRoom from './0-classroom';

/**
 * creates array of "@link ClassRoom" with specific size
 * @returns array of @link ClassRoom
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
