import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.aidwatch.relief{
   export class ReliefAsset extends Asset {
      assetId: string;
      assetName: string;
      CampAdminBioHash: string;
      owner: ReliefParticipant;
   }
   export abstract class ReliefParticipant extends Participant {
      participantId: string;
      firstName: string;
      lastName: string;
      bioHash: string;
   }
   export class LocalWHAdmin extends ReliefParticipant {
   }
   export class InternationalWHAdmin extends ReliefParticipant {
   }
   export class DistPointAdmin extends ReliefParticipant {
   }
   export class CampAdmin extends ReliefParticipant {
   }
   export class Refugee extends ReliefParticipant {
   }
   export class ReliefTransaction extends Transaction {
      asset: ReliefAsset;
      newOwner: ReliefParticipant;
   }
// }
