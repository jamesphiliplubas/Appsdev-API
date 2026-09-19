import app from '@/app';
import { env } from '@/config/env';

app.listen(env.port, () => {
    console.log(`Server running in ${env.nodeEnv} mode at ${env.backendUrl}`);
});