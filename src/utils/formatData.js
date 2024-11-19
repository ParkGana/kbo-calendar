/* teams 데이터를 select box 데이터로 변환 */
export const formatTeamsForSelectBox = (teams) => {
    return teams.map((team) => {
        return { id: team.id, value: team.name_korean };
    });
};
