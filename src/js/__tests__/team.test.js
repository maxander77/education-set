import Team from "../app";

test('should add a character to the team', () => {
  const team = new Team();
  const character = { name: 'Character 1' };

  team.add(character);

  expect([...team.members]).toEqual([character]);
});

test('should not allow adding the same character twice', () => {
  const team = new Team();
  const character = { name: 'Character 1' };

  team.add(character);

  expect(() => team.add(character)).toThrow('Character already exists in the team');
});

test('should add multiple characters to the team', () => {
  const team = new Team();
  const character1 = { name: 'Character 1' };
  const character2 = { name: 'Character 2' };

  team.addAll(character1, character2);

  expect([...team.members]).toEqual([character1, character2]);
});


test('should not allow adding duplicate characters in addALl', () => {
  const team = new Team();
  const character1 = { name: 'Character 1' };

  team.add(character1);

  team.addAll(character1);

  expect([...team.members]).toEqual([character1]);
});

test('should convert the team to an array', () => {
  const team = new Team();
  const character1 = { name: 'Character 1' };
  const character2 = { name: 'Character 2' };

  team.addAll(character1, character2);

  expect(team.toArray()).toEqual([character1, character2]);
});