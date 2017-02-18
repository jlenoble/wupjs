import mongoose from './mongoose';
import {mongoUri} from '../config';

mongoose.connect(mongoUri);
