import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchInterval: false, // NOTE: 자동으로 주기적인 재요청 X
			refetchOnMount: false, // NOTE: 마운트 시 재요청 X
			refetchOnReconnect: false, // NOTE: 네트워크 재연결 시 재요청 X
			refetchOnWindowFocus: false, // NOTE: 브라우저 창 포커스 시 재요청 X
			retry: 0, // NOTE: 쿼리 실패 시 재시도 X
		},
	},
});

export default queryClient;
