import commonRoutes from '@/router/routes/route.common';
import exceptionRoutes from '@/router/routes/route.exception';
import childAppRoutes from '@/router/routes/route.childApp';

export default [...commonRoutes, ...exceptionRoutes, ...childAppRoutes];
