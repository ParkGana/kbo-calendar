import { useQuery } from '@tanstack/react-query';
import { fetchTeamsAPI } from '../../api/Schedule';

export function useTeams() {
    /* team 목록 가져오기 */
    const { data } = useQuery({
        queryKey: ['teams'],
        queryFn: fetchTeamsAPI
    });

    return { data };
}
