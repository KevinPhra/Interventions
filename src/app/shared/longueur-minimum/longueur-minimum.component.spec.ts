import { VerifierCaracteresValidator } from "./longueur-minimum.component";
import { AbstractControl } from "@angular/forms";

describe('sansEspaces Validator', () => {
    it('#7 une chaîne avec 10 espaces est invalide', () => {
    let control = { value: '          ' }
    let validatorFn = VerifierCaracteresValidator.longueurMinimum(3);
    let result= validatorFn(control as AbstractControl);
    expect(result['nbreCaracteresInsuffisant']).toBe(true);
    });
    it('#8 Une phrase avec des mots est valide', () => {
        let control = { value: 'Vive Angular'}
        let validatorFn = VerifierCaracteresValidator.longueurMinimum(3);
        let result= validatorFn(control as AbstractControl);
        expect(result = null);
        });
    
    it('#9 une phrase avec 3 espaces, des mots et ensuite 3 espaces est valide', () => {
        let control = { value: '   je le veux   ' }
        let validatorFn = VerifierCaracteresValidator.longueurMinimum(3);
        let result= validatorFn(control as AbstractControl);
        expect(result == null);
        });

    it('#10 une phrase avec 1 espace et 2 caracteres est invalide', () => {
        let control = { value: ' xx' }
        let validatorFn = VerifierCaracteresValidator.longueurMinimum(3);
        let result= validatorFn(control as AbstractControl);
        expect(result['nbreCaracteresInsuffisant']).toBe(true);
        });
    
    it('#11 une phrase avec 2 espaces et 1 caractere est valide', () => {
        let control = { value: '  x' }
        let validatorFn = VerifierCaracteresValidator.longueurMinimum(3);
        let result= validatorFn(control as AbstractControl);
        expect(result['nbreCaracteresInsuffisant']).toBe(true);
        });
    it('#12 une phrase avec 3 espaces et 3 caracteres est valide', () => {
        let control = { value: '   xxx' }
        let validatorFn = VerifierCaracteresValidator.longueurMinimum(3);
        let result= validatorFn(control as AbstractControl);
        expect(result = null);
        });
    it('#13 une phrase avec 5 espaces, 5 caractere et 5 espaces est valide', () => {
        let control = { value: '     xxxxx     ' }
        let validatorFn = VerifierCaracteresValidator.longueurMinimum(3);
        let result= validatorFn(control as AbstractControl);
        expect(result = null);
        });
    it('#14 une chaine null est invalide', () => {
        let control = { value: '' }
        let validatorFn = VerifierCaracteresValidator.longueurMinimum(3);
        let result= validatorFn(control as AbstractControl);
        expect(result['nbreCaracteresInsuffisant']).toBeNull;
        });
    });
    